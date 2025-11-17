-- Create teams table
CREATE TABLE IF NOT EXISTS public.teams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create team members table
CREATE TABLE IF NOT EXISTS public.team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id UUID NOT NULL REFERENCES public.teams(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  member_number INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security
ALTER TABLE public.teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Create policies for teams table (allow anyone to insert, anyone can view)
CREATE POLICY "Allow anyone to insert teams" ON public.teams
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anyone to view teams" ON public.teams
  FOR SELECT USING (true);

-- Create policies for team members table (allow anyone to insert, anyone can view)
CREATE POLICY "Allow anyone to insert team members" ON public.team_members
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anyone to view team members" ON public.team_members
  FOR SELECT USING (true);
