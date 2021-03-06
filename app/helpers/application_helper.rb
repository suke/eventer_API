module ApplicationHelper
  def javascript_include_path(path)
    path = (Rails.env.development?) ? "http://localhost:8000/#{path}.js" : path
    javascript_include_tag path
  end
end
