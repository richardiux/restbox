require 'action_view'

module ActionView
  module Helpers
    module RestBoxHelper
      def self.included(base)
        base.class_eval do
          include InstanceMethods
        end
      end
      module InstanceMethods
        def restbox(options = {})
          content = escape_javascript(options[:content].to_s || '')
          container_class = escape_javascript(options[:container_class].to_s || '')
          params = "content: \"#{content}\""
          params += ", container_class: \"#{container_class}\"" unless container_class.empty?
          "jQuery.restbox({#{params}});"
        end
      end
    end
  end
end

ActionView::Base.class_eval do
  include ActionView::Helpers::RestBoxHelper
end