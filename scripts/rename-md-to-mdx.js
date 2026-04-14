#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 递归查找目录下所有 .md 文件并重命名为 .mdx
 * @param {string} dir - 要扫描的目录路径
 * @returns {Object} 统计信息
 */
function renameMdToMdx(dir) {
  let stats = {
    renamed: 0,
    skipped: 0,
    errors: 0,
    total: 0
  };

  try {
    // 检查目录是否存在
    if (!fs.existsSync(dir)) {
      console.error(`❌ 目录不存在: ${dir}`);
      return stats;
    }

    // 递归扫描目录
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // 递归处理子目录
        const subStats = renameMdToMdx(filePath);
        stats.renamed += subStats.renamed;
        stats.skipped += subStats.skipped;
        stats.errors += subStats.errors;
        stats.total += subStats.total;
      } else if (file.endsWith('.md')) {
        stats.total++;
        
        // 检查是否已经是 .mdx 文件
        if (file.endsWith('.mdx')) {
          stats.skipped++;
          console.log(`⏭️  跳过: ${filePath} (已经是 .mdx 文件)`);
          continue;
        }

        // 构建新文件名
        const newFileName = file.replace(/\.md$/, '.mdx');
        const newFilePath = path.join(dir, newFileName);

        try {
          // 重命名文件
          fs.renameSync(filePath, newFilePath);
          stats.renamed++;
          console.log(`✅ 重命名: ${filePath} → ${newFilePath}`);
        } catch (error) {
          stats.errors++;
          console.error(`❌ 错误: 无法重命名 ${filePath}: ${error.message}`);
        }
      }
    }
  } catch (error) {
    console.error(`❌ 错误: 扫描目录 ${dir} 时出错: ${error.message}`);
    stats.errors++;
  }

  return stats;
}

/**
 * 主函数
 */
function main() {
  const args = process.argv.slice(2);
  const docsDir = args[0] || './docs'; // 默认使用 ./docs 目录

  console.log('🚀 开始重命名 .md 文件为 .mdx 文件...\n');
  console.log(`📁 扫描目录: ${path.resolve(docsDir)}\n`);

  const stats = renameMdToMdx(docsDir);

  console.log('\n' + '='.repeat(50));
  console.log('📊 统计信息:');
  console.log('='.repeat(50));
  console.log(`总计扫描: ${stats.total} 个 .md 文件`);
  console.log(`成功重命名: ${stats.renamed} 个文件`);
  console.log(`跳过: ${stats.skipped} 个文件`);
  console.log(`错误: ${stats.errors} 个文件`);
  console.log('='.repeat(50));

  if (stats.renamed > 0) {
    console.log('\n✅ 重命名完成！');
  } else if (stats.total === 0) {
    console.log('\n⚠️  未找到任何 .md 文件');
  } else {
    console.log('\n⚠️  没有文件被重命名');
  }
}

// 运行主函数
main();
