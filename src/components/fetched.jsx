const BASE_URL = 'https://api.globalgiving.org/api/public/projectservice/featured/projects.json?api_key=7a620d36-2596-43b9-b8bc-870f065869f5';

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
    console.log("API response:", data);

    return {
      projects: data.projects?.project || [],
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      projects: [],
    };
  }
};
