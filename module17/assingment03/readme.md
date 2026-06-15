Query 1: Retrieve all upcoming football matches belonging to the 'Champions League' where the match status is 'Available'.

SELECT 
    match_id,
    fixture,
    base_ticket_price
FROM Matches
WHERE tournament_category = 'Champions League'
  AND match_status = 'Available';

  Query 2: Search for all users whose full names start with 'Tanvir' or contain the phrase 'Haque' (case-insensitive).

  SELECT 
    user_id,
    full_name,
    email
FROM Users
WHERE full_name ILIKE 'Tanvir%'
   OR full_name ILIKE '%Haque%';

Query 3: Retrieve all booking records where the payment status is missing (NULL), replacing the empty result with 'Action Required'.

SELECT 
    booking_id,
    user_id,
    match_id,
    COALESCE(payment_status, 'Action Required') AS systematic_status
FROM Bookings;

Query 4: Retrieve match booking details along with the User's full name and the scheduled Match fixture teams.
Concepts used: INNER JOIN


SELECT 
    b.booking_id,
    u.full_name,
    m.fixture,
    b.total_cost
FROM Bookings b
INNER JOIN Users u
    ON b.user_id = u.user_id
INNER JOIN Matches m
    ON b.match_id = m.match_id;

Query 5: Display a comprehensive list of all users and their booking IDs, ensuring that fans who have never bought a ticket are still listed.
Concepts used: LEFT JOIN / Full JOIN

SELECT 
    u.user_id,
    u.full_name,
    b.booking_id
FROM Users u
LEFT JOIN Bookings b
    ON u.user_id = b.user_id;
Query 6: Find all ticket bookings where the total cost is strictly higher than the average cost of all ticket bookings.

SELECT 
    booking_id,
    match_id,
    total_cost
FROM Bookings
WHERE total_cost > (
    SELECT AVG(total_cost)
    FROM Bookings
);

Query 7: Retrieve the top 2 most expensive matches sorted by base ticket price, skipping the absolute highest premium match.
SELECT 
    match_id,
    fixture,
    base_ticket_price
FROM Matches
ORDER BY base_ticket_price DESC
LIMIT 2 OFFSET 1;
