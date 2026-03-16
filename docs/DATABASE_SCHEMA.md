# Database Schema and Relationships

## Overview
This document describes the database schema and relationships for the crime record management system.

## Tables

### Users
- **user_id** (PK): Unique identifier for each user.
- **username**: Username of the user.
- **password**: Password of the user.
- **email**: Email address of the user.

### Crimes
- **crime_id** (PK): Unique identifier for each crime.
- **created_at**: Timestamp of when the crime record was created.
- **description**: Description of the crime.
- **user_id** (FK): Reference to the user who reported the crime.

### Locations
- **location_id** (PK): Unique identifier for each location.
- **crime_id** (FK): Reference to the associated crime.
- **address**: Address of the location.
- **longitude**: Longitude coordinates.
- **latitude**: Latitude coordinates.

## Relationships
- A **User** can report multiple **Crimes**, but a **Crime** is reported by one **User** (One-to-Many).
- A **Crime** can have one **Location**, and each **Location** corresponds to one **Crime** (One-to-One).