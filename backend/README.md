# Resilia Take Home - Backend

The following is repeated from the main repo README, however in case it is easier to read the backend's information separately from the frontend I have decided to include this README.

## Tech Stack

- Ruby on Rails
- PostgreSQL

## Getting Started

### Dependencies

- Ruby on Rails
- PostgreSQL

Follow the [instructions here to install Ruby](https://www.ruby-lang.org/en/documentation/installation/). You can also try `ruby -v` to check if you have Ruby already installed on your computer. If using macOS you can simply install Ruby with Homebrew by running in your terminal:

```
brew install Ruby
```

Once you have Ruby installed you will need to install [Rails](https://guides.rubyonrails.org/v5.0/getting_started.html#installing-rails). To do so you can use the `gem install` command provided by RubyGems, and afterwards to verify everything is installed correctly, you should be able to run: `rails --version`:

```
gem install rails
```

Follow the [instructions here to install PostgreSQL](https://www.postgresql.org/download/). If using macOS you can simply install PostgreSQL with Homebrew by running in your terminal:

```
brew install postgresql
```

### Installing

**Note**: For convenience, it's important to start the backend (Rails) server first. By doing so, Rails will be available at `localhost:3000` and then the frontend (React) will change to a different port after prompting you in the terminal (simply type `y` once the prompt appears). You will then be able to view the frontend at `localhost:3001`.

Assuming you have already cloned the main repo and have a tab in your terminal specifically for this directory (`cd backend`):

- bundle install to get all required dependencies

```
bundle install
```

- set up the PostgreSQL database

```
rails db:create
```

- create migrations and add the seed data

```
rails db:migrate
rails db:seed
```

### Executing

- Launch the Rails server!

```
rails s
```

- Open http://localhost:3000/ with your browser to see that you have Rails running
