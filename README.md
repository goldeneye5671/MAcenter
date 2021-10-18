# MAcenter

## What is MAcenter?

MAcenter is a full stack PFPR app that allows users to find information about a Martial Art, and then Martial Art studios/Dojos in their area that practice the art that the user wants to practice. Masters/Studio Owners can create an instructor account to add their Studio/Dojo to the site to be found and reviewed by students. A Studio/Dojo page will have important information about the Studio/Dojo such as a studio ID given to them by their respective martial arts, the art that the master teaches, and external links to the Studio's/Dojo's website. Students can affiliate themselves with a school or not and leave reviews on the school. At the current time, studions on the site will be in the Southern California area.

## Application Architecture

MAcenter is built on a react frontend with a Flask backend, with a PostgreSQL database.

### Frontend Technologies Used

#### React
#### Redux

## Backend Overview

#### Flask

A Flask backend was chosen because of the simplicity and power over other server frameworks. It makes development quick, easy, and straightforward 

#### PostgreSQL

A PostgreSQL was chosen because it is simple to work with and easy to change with SQLAlchemy

#### PsycoPG

PsycoPG is used as it it is a dependency to SQLAlchemy. SQLAlchemy uses PsycoPG to communicate with the PostgreSQL database

#### SQLalchemy

SQLAlchemy was chosen for the ORM because it integerates well with PostgreSQL with the PsycoPG package.

#### WTForms

WTForms was used for validating the forms that were sent to the user.

# Conclusion and Next Steps

Comming soon...
