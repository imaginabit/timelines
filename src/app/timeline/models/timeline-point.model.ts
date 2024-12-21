export class TimelinePoint {
    constructor(
      public id: number,
      public title: string,
      public description: string,
      public date: Date,
      public background: string,
      public presentation: string
    ) {}
  }