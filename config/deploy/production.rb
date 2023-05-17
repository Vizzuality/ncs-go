server '44.195.155.58', user: 'ubuntu', roles: %w{web app db}, primary: true
set :ssh_options, forward_agent: true
set :branch, 'main'
