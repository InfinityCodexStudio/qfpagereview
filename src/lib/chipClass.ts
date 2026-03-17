export const chipClass = (selected: boolean): string =>
  `px-4 py-2.5 text-sm font-medium rounded-full border transition-all cursor-pointer ${
    selected
      ? 'bg-primary text-primary-foreground border-primary'
      : 'bg-card text-foreground border-border hover:border-primary'
  }`;
