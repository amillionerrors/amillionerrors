source "https://rubygems.org"

# Target modern Jekyll compatible with Ruby 4.0+
gem "jekyll", "~> 4.3"
gem "jekyll-remote-theme"
gem "webrick"
gem "jekyll-seo-tag"

# Windows-specific directory watcher
gem 'wdm', '>= 0.1.0' if Gem.win_platform?

# Explicitly declare gems that were extracted from the Ruby core
gem "rexml"
gem "base64"
gem "bigdecimal"
gem "csv"

# If you have an active development environment plugin testing links
gem "html-proofer", "~> 5.0"

gemspec if File.exist?("#{File.basename(Dir.pwd)}.gemspec")