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
          "jQuery.restbox({content: \"#{content}\"}\"});"
        end
      end
    end
  end
end

ActionView::Base.class_eval do
  include ActionView::Helpers::RestBoxHelper
end