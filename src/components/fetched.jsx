const BASE_URL = '/api/api/public/projectservice/featured/projects.json?api_key=e01c2d25-cf33-4932-becf-e919d9914f1a';

export const fetchProjects = async (nextProjectId = null) => {
  try {
    // Construct URL with pagination param if exists
    const url = nextProjectId
      ? `${BASE_URL}&nextProjectId=${nextProjectId}`
      : BASE_URL;

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    return {
      projects: data.projects?.project || [],
      nextProjectId: data.nextProjectId || null,
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      projects: [],
      nextProjectId: null,
    };
  }
};
