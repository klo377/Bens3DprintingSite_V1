export interface TutorialStep {
  number: number;
  title: string;
  description: string;
  image?: string;
  tips?: string[];
}

export interface Tutorial {
  id: string;
  title: string;
  difficulty: string;
  duration: string;
  description: string;
  topics: string[];
  steps: TutorialStep[];
  videoUrl?: string;
  requirements?: string[];
  free: boolean;
}