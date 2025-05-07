const BASE_URL = '/api/api/public/projectservice/featured/projects.json?api_key=e01c2d25-cf33-4932-becf-e919d9914f1a';

export const fetchProjects = async () => {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log(data);  
    return data.projects?.project || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
