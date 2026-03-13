/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Layout, 
  Cpu, 
  Github, 
  Wrench, 
  Zap, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  FileText,
  MousePointer2,
  Globe
} from 'lucide-react';
import { motion } from 'motion/react';

const ToolCard = ({ icon: Icon, name, url, description }: { icon: any, name: string, url: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
  >
    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-slate-600" />
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-1">{name}</h3>
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:underline mb-3 inline-block">
      {url}
    </a>
    <p className="text-slate-600 text-sm leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const Step = ({ number, title, content }: { number: string, title: string, content: string[] }) => (
  <div className="flex gap-6 mb-8 group">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-110 transition-transform">
        {number}
      </div>
      <div className="w-px h-full bg-slate-200 mt-2"></div>
    </div>
    <div className="pb-8">
      <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
      <ul className="space-y-2">
        {content.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">AI Build Report</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#tools" className="hover:text-slate-900 transition-colors">工具介绍</a>
            <a href="#workflow-1" className="hover:text-slate-900 transition-colors">工作流 A</a>
            <a href="#workflow-2" className="hover:text-slate-900 transition-colors">工作流 B</a>
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all">
              开始体验
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-200 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Workflow Documentation
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
              基于 AI 的网页生成<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                高效汇报级工作流
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              整合 AI Studio、TRAE 与 GitHub，实现从创意到公网发布的闭环体验。
              支持文档识别、自动布局与精细化调整。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#workflow-1" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-slate-200 transition-all group">
                查看工作流 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#tools" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                了解工具集
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Tools Section */}
      <section id="tools" className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">核心工具集</h2>
            <p className="text-slate-600 max-w-xl">
              我们选用了业界领先的 AI 辅助开发工具，确保生成的网页具备专业级的设计感与交互体验。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ToolCard 
              icon={Layout}
              name="TRAE"
              url="https://www.trae.ai/"
              description="用于网页生成，细节操作更灵活。支持国际版（推荐）与国内版，兼容 Gemini 3+ 等大模型。"
            />
            <ToolCard 
              icon={Cpu}
              name="AI Studio"
              url="https://aistudio.google.com"
              description="Google 提供的强大开发环境，用于网页生成，提供更多样化的设计思路与风格选择。"
            />
            <ToolCard 
              icon={Github}
              name="GitHub"
              url="https://github.com/"
              description="版本控制与发布平台，将本地网页项目发布至公网进行公开展示与协作。"
            />
            <ToolCard 
              icon={Wrench}
              name="技能网站"
              url="https://skillsmp.com/"
              description="提供格式转换插件，将 Excel/Word/PPT 转换为 AI 易于识别的源数据。"
            />
          </div>
        </div>
      </section>

      {/* Workflow 1 */}
      <section id="workflow-1" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-4 block">Workflow A</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">AI Studio + TRAE + GitHub</h2>
              <p className="text-slate-600 mb-12 text-lg">
                这是最推荐的完整生成路径，结合了 AI Studio 的创意生成能力与 TRAE 的精细化调整优势。
              </p>
              
              <div className="space-y-4">
                <Step 
                  number="01"
                  title="基础项目生成"
                  content={[
                    "在 AI Studio 中使用 Build 功能进行项目级构建",
                    "输入需求：'汇报级页面、浅色风格、包含项目情况与大纲'",
                    "支持直接上传文件生成对应网页（建议先通过 Skills 转换格式）"
                  ]}
                />
                <Step 
                  number="02"
                  title="TRAE 精细调整"
                  content={[
                    "下载 AI Studio 生成的项目包并解压",
                    "在 TRAE 中打开并运行预览",
                    "通过自然语言指令修改细节，如'将数据改为付款'或添加图片"
                  ]}
                />
                <Step 
                  number="03"
                  title="GitHub 公网发布"
                  content={[
                    "创建 GitHub 仓库并上传代码",
                    "添加部署技能 Skills 以兼容 Deploy 模式",
                    "通过 Actions 查看进度，发布至 gh-pages 分支"
                  ]}
                />
              </div>
            </div>
            
            <div className="sticky top-32">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
                <div className="bg-slate-900 p-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-[10px] text-slate-400 font-mono">ai-studio-project-preview.html</div>
                </div>
                <div className="bg-white p-8 aspect-[4/3] flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                    <Monitor className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">汇报级页面预览</h3>
                  <div className="w-full max-w-xs space-y-3">
                    <div className="h-2 bg-slate-100 rounded-full w-full"></div>
                    <div className="h-2 bg-slate-100 rounded-full w-5/6 mx-auto"></div>
                    <div className="h-2 bg-slate-100 rounded-full w-4/6 mx-auto"></div>
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-4 w-full">
                    <div className="aspect-square bg-slate-50 rounded-xl border border-dashed border-slate-200"></div>
                    <div className="aspect-square bg-slate-50 rounded-xl border border-dashed border-slate-200"></div>
                    <div className="aspect-square bg-slate-50 rounded-xl border border-dashed border-slate-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow 2 */}
      <section id="workflow-2" className="py-24 px-6 bg-slate-900 text-white rounded-[3rem] mx-4 my-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-4 block">Workflow B</span>
            <h2 className="text-4xl font-bold mb-6">TRAE + GitHub 直接生成</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              适用于已有明确文档内容，需要快速生成落地页的场景。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: FileText, 
                title: "新建项目", 
                desc: "发布指令：'附件+根据文件内容生成汇报级落地页'。要求：浅色、大字报、标题分级明确。" 
              },
              { 
                icon: MousePointer2, 
                title: "交互确认", 
                desc: "AI 交互进行生成内容确认，选择 Yes/No。基于生成的网页预览进行细节调试。" 
              },
              { 
                icon: Globe, 
                title: "快速发布", 
                desc: "调试完成后通过 GitHub 发布至公网展示。注意：TRAE 的生成过程可能比 AI Studio 稍慢。" 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">AI Build</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 AI Web Generation Workflow. 基于 PDF 附件内容生成。
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Globe className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
