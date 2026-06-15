-- =========================================================================
-- 1. CREATE USERS TABLE
-- =========================================================================
CREATE TABLE Users (
    user_id SERIAL,
    full_name VARCHAR(100),
    email VARCHAR(50),
    role VARCHAR(20),
    phone_number VARCHAR(15),

    CONSTRAINT pk_users PRIMARY KEY (user_id),
    CONSTRAINT uq_users_email UNIQUE (email),
    CONSTRAINT chk_users_role
        CHECK (role IN ('Ticket Manager', 'Football Fan'))
);
-- =========================================================================
-- 2. CREATE MATCHES TABLE
-- =========================================================================
CREATE TABLE Matches (
    match_id serial,
    fixture varchar(50),
    tournament_category varchar(50),
    base_ticket_price int,
    match_status varchar(20),
    CONSTRAINT pk_match PRIMARY KEY (match_id),
    CONSTRAINT chk_price CHECK (base_ticket_price >= 0),
    CONSTRAINT chk_status CHECK (
        match_status IN ('Available', 'Selling Fast', 'Sold Out')
    )
    -- Write your constraint to make 'match_id' the Primary Key
    -- Write your check constraint to prevent negative ticket prices
    -- Write your check constraint to restrict 'match_status' values
);

CREATE TABLE Bookings (
    booking_id SERIAL,
    user_id int,
    match_id int,
    seat_number varchar(20),
    payment_status varchar(20),
    total_cost int,
    -- Primary Key
    CONSTRAINT pk_booking PRIMARY KEY (booking_id),
    -- Foreign Key: Users table
    CONSTRAINT fk_user FOREIGN key (user_id) REFERENCES Users (user_id),
    -- Foreign Key: Matches table
    CONSTRAINT fk_match FOREIGN key (match_id) REFERENCES Matches (match_id),
    -- Check: total_cost must be non-negative
    CONSTRAINT chk_total_cost CHECK (total_cost >= 0),
    -- Check: allowed payment status values
    CONSTRAINT chk_payment_status CHECK (payment_status IN ('Confirmed', 'Pending'))
    -- Write your constraint to make 'booking_id' the Primary Key
    -- Write your Foreign Key constraint linking 'user_id' to the Users table
    -- Write your Foreign Key constraint linking 'match_id' to the Matches table
    -- Write your check constraint to ensure 'total_cost' is non-negative
    -- Write your check constraint to restrict 'payment_status' values
);

-- =========================================================================
-- DATA SEEDING: INSERT SAMPLE DATA INTO USERS
-- =========================================================================
INSERT INTO Users (user_id, full_name, email, role, phone_number) VALUES
(1, 'Tanvir Rahman', 'tanvir@mail.com', 'Football Fan', '+8801711111111'),
(2, 'Asif Haque', 'asif@mail.com', 'Football Fan', '+8801722222222'),
(3, 'Sajjad Rahman', 'sajjad@mail.com', 'Ticket Manager', '+8801733333333'),
(4, 'Jannat Ara', 'jannat@mail.com', 'Football Fan', NULL);

-- =========================================================================
-- DATA SEEDING: INSERT SAMPLE DATA INTO MATCHES
-- =========================================================================
INSERT INTO Matches (match_id, fixture, tournament_category, base_ticket_price, match_status) VALUES
(101, 'Real Madrid vs Barcelona', 'Champions League', 150.00, 'Available'),
(102, 'Man City vs Liverpool', 'Premier League', 120.00, 'Selling Fast'),
(103, 'Bayern Munich vs PSG', 'Champions League', 130.00, 'Available'),
(104, 'AC Milan vs Inter Milan', 'Serie A', 90.00, 'Sold Out'),
(105, 'Juventus vs Roma', 'Serie A', 80.00, 'Available');

-- =========================================================================
-- DATA SEEDING: INSERT SAMPLE DATA INTO BOOKINGS
-- =========================================================================
INSERT INTO Bookings (booking_id, user_id, match_id, seat_number, payment_status, total_cost) VALUES
(501, 1, 101, 'A-12', 'Confirmed', 150.00),
(502, 1, 102, 'B-04', 'Confirmed', 120.00),
(503, 2, 101, 'A-13', 'Confirmed', 150.00),
(504, 2, 101, NULL, NULL, 150.00),
(505, 3, 102, 'C-20', 'Pending', 120.00);