export class License {
  constructor(
    public id: number,
    public contractRequestId: number,
    public started_at: Date,
    public expired_at: Date
  ) {}
}
