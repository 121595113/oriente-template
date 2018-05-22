Pod::Spec.new do |s|
  s.name         = "OrienteVue"
  s.version      = "0.0.1"
  s.summary      = "A Vue.js project"
  s.homepage     = "https://www.github.com//oriente-vue"
  s.license      = { :type => "ISC" }
  s.authors      = { "TaoYu" => "121595113@qq.com" }
  s.platform     = :ios, "8.0"
  s.source       = { :path => "." }
  s.source_files = "ios", "dist/**/*.{js,css,html,png,json,xml}"
  s.subspec "chunk" do |ss|
    ss.source_files = "chunk/**/*.{js,css,html,png,json,xml}"
   end
  s.subspec "common" do |ss|
    ss.source_files = "common/**/*.{js,css,html,png,json,xml}"
   end
  s.subspec "main-page" do |ss|
    ss.source_files = "main-page/**/*.{js,css,html,png,json,xml}"
   end
  s.subspec "message-center" do |ss|
    ss.source_files = "message-center/**/*.{js,css,html,png,json,xml}"
   end
  s.subspec "plugins" do |ss|
    ss.source_files = "plugins/**/*.{js,css,html,png,json,xml}"
   end
end