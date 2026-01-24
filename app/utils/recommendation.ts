import { Project } from "./fetchProjects";

export const recommendProjects = (projects: Project[], userHistory: Project[] = []): Project[] => {
  if (!userHistory.length) {
    // Agar user ne kuch dekha nahi, top 5 popular projects
    return projects
      .sort((a, b) => (b.views || 0) - (a.views || 0))
      .slice(0, 5);
  }

  // Collect all tags from user history
  const historyTags = userHistory.flatMap(p => p.tags || []);
  
  // Count frequency of tags
  const tagCount: Record<string, number> = {};
  historyTags.forEach(tag => tagCount[tag] = (tagCount[tag] || 0) + 1);

  // Score each project based on matching tags
  const scoredProjects = projects.map(project => {
    const score = (project.tags || []).reduce((acc, tag) => acc + (tagCount[tag] || 0), 0);
    return { project, score };
  });

  // Sort by score + views + recency
  scoredProjects.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if ((b.views || 0) !== (a.views || 0)) return (b.views || 0) - (a.views || 0);
    const dateA = a.project.date ? new Date(a.project.date).getTime() : 0;
    const dateB = b.project.date ? new Date(b.project.date).getTime() : 0;
    return dateB - dateA;
  });

  // Return top 5 recommended projects
  return scoredProjects.slice(0, 5).map(s => s.project);
};
