"use client";

import { JavascriptIcon, ReactIcon, NodejsIcon, PythonIcon, PandasIcon, SqlIcon, FlaskIcon, RestApiIcon } from './tech-icons';

interface SkillIconProps {
  skillName: string;
  className?: string;
}

export function SkillIcon({ skillName, className }: SkillIconProps) {
  switch (skillName) {
    case 'JavaScript':
      return <JavascriptIcon className={className} />;
    case 'React':
      return <ReactIcon className={className} />;
    case 'Node.js':
      return <NodejsIcon className={className} />;
    case 'Python':
      return <PythonIcon className={className} />;
    case 'Pandas & NumPy':
      return <PandasIcon className={className} />;
    case 'SQL & NoSQL':
      return <SqlIcon className={className} />;
    case 'Flask':
      return <FlaskIcon className={className} />;
    case 'REST APIs':
        return <RestApiIcon className={className} />;
    default:
      return null;
  }
}
