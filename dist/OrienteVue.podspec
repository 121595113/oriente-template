Pod::Spec.new do |s|
  s.name         = "OrienteVue"
  s.version      = "0.0.1"
  s.summary      = "A Vue.js project"
  s.homepage     = "https://www.github.com/oriente-vue"
  s.license      = { :type => "ISC" }
  s.authors      = { "TaoYu" => "121595113@qq.com" }
  s.platform     = :ios, "8.0"
  s.source       = { :path => "." }
  s.source_files = "ios", "OrienteVue.zip"
  s.subspec "chunk" do |ss|
    ss.resources = "chunk/**/*.{js,css,html,png,json,xml}"
   end
  s.subspec "common" do |ss|
    ss.resources = "common/**/*.{js,css,html,png,json,xml}"
   end
  s.subspec "main-page" do |ss|
    ss.resources = "main-page/**/*.{js,css,html,png,json,xml}"
   end
  s.subspec "message-center" do |ss|
    ss.resources = "message-center/**/*.{js,css,html,png,json,xml}"
   end
  s.subspec "plugins" do |ss|
    ss.resources = "plugins/**/*.{js,css,html,png,json,xml}"
   end
end