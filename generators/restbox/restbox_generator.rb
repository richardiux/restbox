class RestboxGenerator < Rails::Generator::NamedBase
  
  source_root File.expand_path('../templates', __FILE__)
  
  def initialize(*runtime_args)
    super
  end
  
  def manifest
    record do |m|
      m.directory File.join('public', 'stylesheets')
      m.template 'stylesheets/restbox.css',   File.join('public', 'stylesheets', 'restbox.css')
      
      m.directory File.join('public', 'javascripts')
      m.template 'javascripts/restbox.js',   File.join('public', 'javascripts', 'restbox.js')
      
      m.directory File.join('public', 'images')
      m.template 'images/loader.gif',   File.join('public', 'images', 'restbox', 'loader.gif')
      m.template 'images/restbox_close.png',   File.join('public', 'images', 'restbox' , 'restbox_close.png')
    end
  end
    
  protected
  
  def banner
    %{Usage: #{$0} #{spec.name}\nCopies restbox.css, restbox.js, and images to it's proper location to public}
  end
  
end

# class RestboxGenerator < Rails::Generator::Base
# 
#   source_root File.expand_path('../templates', __FILE__)
#   argument :layout_name, :type => :string, :default => "application"
# 
#   def all
#     directory File.join('public', 'stylesheets')
#     template 'stylesheets/restbox.css', 'public/stylesheets/restbox.css'
# 
#     directory File.join('public', 'javascripts')
#     template 'javascripts/restbox.js', 'public/javascripts/restbox.js'
# 
#     directory File.join('public', 'images')
#     template 'images/loader.gif', 'public/images/restbox/loader.gif'
#     template 'images/restbox_close.png', 'public/images/restbox/restbox_close.png'
# 
#   end
# 
# end