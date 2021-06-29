# LARAVEL FULLSTACK WITH REACT #

# To create Laravel project
 $ laravel new laravel-fullstack

 # run laravel application
 $ php artisan serve

 # integrage ui package in laravel application

$ composer require laravel/ui:^2.4 

# install react package inside laravel
$ php artisan ui react

# install bootswatch
 $ npm install bootswatch

 # Notes:-
 1. We are using bootswatch instead of bootstrap
 2. Bootswatch having same class as of bootstrap
 3. Official site := https://bootswatch.com/
 4. We are using sass instead of normal css

 ## to run the application in watch mode 
 $ npm run watch


## to run the laravel application
$ php artisan serve

## create contacts table using migration command
$ php artisan make:migration create_contacts_table

## migrate created table on database
$ php artisan migrate

## creating resource controller
$ php artisan make:controller ContactController --resource

## create Contact Model
$ php artisan make:model Contact


## install react and react router dom for linking page on specific url
$ npm install react-router react-router-dom