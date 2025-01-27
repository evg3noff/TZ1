WITH SubdivisionsCTE AS (
SELECT id, name, parent_id, 1 AS level FROM subdivisions
WHERE id = (SELECT subdivision_id FROM collaborators WHERE id = 710253)
UNION ALL
SELECT s.id, s.name, s.parent_id, level  FROM subdivisions s
INNER JOIN SubdivisionsCTE ON s.parent_id = SubdivisionsCTE.id
)
SELECT c.id AS id, c.name AS name, sub.name AS sub_name, sub.id AS sub_id, sub.level AS sub_level, COUNT(c2.id) AS ñolls_Count
FROM collaborators c
INNER JOIN SubdivisionsCTE sub ON c.subdivision_id = sub.id
LEFT JOIN collaborators c2 ON C2.subdivision_id = sub.id
WHERE c.age < 40 AND sub.id NOT IN (100055, 100059)
GROUP BY c.id, c.name, sub.name, sub.id, sub.level
ORDER BY
sub.level;