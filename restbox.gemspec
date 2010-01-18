# Generated by jeweler
# DO NOT EDIT THIS FILE DIRECTLY
# Instead, edit Jeweler::Tasks in Rakefile, and run the gemspec command
# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = %q{restbox}
  s.version = "0.1.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Richard Millan"]
  s.date = %q{2009-11-19}
  s.description = %q{Simple restful ajax overlay to work with jQuery and Rails}
  s.email = %q{richardiux@gmail.com}
  s.extra_rdoc_files = [
    "LICENSE",
     "README.rdoc"
  ]
  s.files = [
    ".document",
     ".gitignore",
     "LICENSE",
     "README.rdoc",
     "Rakefile",
     "VERSION.yml",
     "generators/restbox/restbox_generator.rb",
     "generators/restbox/templates/images/loader.gif",
     "generators/restbox/templates/images/restbox_close.png",
     "generators/restbox/templates/javascripts/restbox.js",
     "generators/restbox/templates/restbox.rb",
     "generators/restbox/templates/stylesheets/restbox.css",
     "install.rb",
     "lib/restbox.rb",
     "lib/restbox_view_helper.rb",
     "rails/init.rb",
     "restbox.gemspec",
     "test/helper.rb",
     "test/test_restbox.rb"
  ]
  s.homepage = %q{http://github.com/richardiux/restbox}
  s.rdoc_options = ["--charset=UTF-8"]
  s.require_paths = ["lib"]
  s.rubygems_version = %q{1.3.5}
  s.summary = %q{Simple restful ajax overlay to work with jQuery and Rails}
  s.test_files = [
    "test/helper.rb",
     "test/test_restbox.rb"
  ]

  if s.respond_to? :specification_version then
    current_version = Gem::Specification::CURRENT_SPECIFICATION_VERSION
    s.specification_version = 3

    if Gem::Version.new(Gem::RubyGemsVersion) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<thoughtbot-shoulda>, [">= 0"])
    else
      s.add_dependency(%q<thoughtbot-shoulda>, [">= 0"])
    end
  else
    s.add_dependency(%q<thoughtbot-shoulda>, [">= 0"])
  end
end

