export interface RestaurantInfo {
  leastCrowded: number;
  id: number;
  name: string;
  startAt: string;
  endAt: string;
  breakStartAt: string;
  breakEndAt: string;
  waitingPeople: number;
  maxPeople: number;
  congestion: '혼잡' | '여유' | '보통';
}
