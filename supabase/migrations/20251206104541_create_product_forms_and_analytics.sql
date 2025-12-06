/*
  # Create Product Forms and Analytics Tables

  1. New Tables
    - `quotation_requests` - Store customer quotation requests
    - `demo_bookings` - Store demo/field trial booking requests
    - `site_assessments` - Store site assessment requests for nanogrids
    - `analytics_events` - Track user interactions and clicks

  2. Security
    - Enable RLS on all tables
    - Public read for analytics (no write)
    - Public insert for forms (for lead generation)

  3. Indexes
    - Created on created_at for efficient queries
    - Created on product_id/event_type for filtering
*/

CREATE TABLE IF NOT EXISTS quotation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organization text,
  phone text,
  message text,
  product text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS demo_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organization text,
  phone text,
  preferred_date date,
  product text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS site_assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organization text,
  phone text,
  site_location text,
  power_requirements text,
  message text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS analytics_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  product_id text,
  user_agent text,
  referrer text,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS quotation_requests_created_at ON quotation_requests(created_at);
CREATE INDEX IF NOT EXISTS quotation_requests_product ON quotation_requests(product);
CREATE INDEX IF NOT EXISTS demo_bookings_created_at ON demo_bookings(created_at);
CREATE INDEX IF NOT EXISTS demo_bookings_product ON demo_bookings(product);
CREATE INDEX IF NOT EXISTS site_assessments_created_at ON site_assessments(created_at);
CREATE INDEX IF NOT EXISTS analytics_events_created_at ON analytics_events(created_at);
CREATE INDEX IF NOT EXISTS analytics_events_type ON analytics_events(event_type);

ALTER TABLE quotation_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE demo_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on quotation_requests"
  ON quotation_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public insert on demo_bookings"
  ON demo_bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public insert on site_assessments"
  ON site_assessments FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public insert on analytics_events"
  ON analytics_events FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
