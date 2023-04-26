server 'ec2-18-207-144-211.compute-1.amazonaws.com', user: 'ubuntu', roles: %w{web app db}, primary: true
set :ssh_options, forward_agent: true
set :branch, 'main'
