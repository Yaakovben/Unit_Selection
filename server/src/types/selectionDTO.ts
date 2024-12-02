export default interface addSelection{ 
    name: string; 
    personalNote?: string; 
    combatPreferences: {
      golani: number;
      armor: number;
      artillery: number;
      searchAndRescue: number;
    };
    supportPreferences: {
      targetingNCO: number;
      nimrodiSergeant: number;
      cook: number;
      sandwichFiller: number;
    };
    techPreferences: {
      fullstack: number;
      data: number;
      devops: number;
      duty: number;
    };
}

