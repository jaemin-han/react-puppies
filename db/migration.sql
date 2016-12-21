BEGIN;

DROP TABLE IF EXISTS reactpuppies2;

CREATE TABLE reactpuppies2 (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  url TEXT NOT NULL,
  description TEXT,
  likes INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT current_timestamp
);

COPY reactpuppies2 (name, url)
FROM '/Users/jaeminhan/Desktop/Projects - coding/react-puppies/db/reactpuppies.csv' with (format csv, delimiter ',');

COMMIT;
