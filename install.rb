require 'fileutils'

public_path = File.dirname(__FILE__) + '/../../../public'
images_path = public_path + '/images/restbox'

close_img   = images_path + '/restbox_close.png'
loading_img = images_path + '/loader.gif'
restbox_js  = public_path + '/javascripts/restbox.js'
restbox_css = public_path + '/stylesheets/restbox.css'

FileUtils.makedirs images_path

FileUtils.cp_r File.dirname(__FILE__) + '/public/images/restbox_close.png', close_img
FileUtils.cp_r File.dirname(__FILE__) + '/public/images/loader.gif', loading_img
FileUtils.cp_r File.dirname(__FILE__) + '/public/javascripts/restbox.js', restbox_js
FileUtils.cp_r File.dirname(__FILE__) + '/public/stylesheets/restbox.css', restbox_css

puts IO.read(File.join(File.dirname(__FILE__), 'README.rdoc'))