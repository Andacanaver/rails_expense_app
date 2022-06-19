#My Ruby/Rails template

* This template was created using the following command:
  - rails new 'name-of-app' --database=postgresql --css tailwind 
  - tailwind may need to use the following command for different OSes:
    bundle lock --add-platform ['arm64-darwin', 'x64-mingw32', 'x86_64-darwin']
  - arm64-darwin is MacOS with M1 chip
  - x86_64-darwin is MacOS with intel chip
  - x64-mingw32 is Windows 64bit

  * Run the following command to install tailwindcss-rails gem
    rails tailwindcss:install

1. In Gemfile, I added the following gems:
  a. dotenv-rails
  b. font-awesome-rails
  c. rubocop
2. run command 'bundle install'
3. In the \config\application.rb file add in the following:
  * Dotenv::Railtie.load
  * HOSTNAME = ENV['HOSTNAME']
  - This will enable environment variables in development environment.
4. run the following commands:
  a. rails importmap:install
  b. rails turbo:install
  c. rails turbo:install:redis
  - this will allow the use of the turbo methods
5. 

