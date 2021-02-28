export class SubsPleaseXdccResult {

  botNick: string|null|undefined;
  packId: number|null|undefined;
  fileSize: number|null|undefined;
  fileName: string|null|undefined;

  constructor(result?: any) {
    if (result) {
      this.botNick = result.b;
      this.packId = result.n;
      this.fileSize = result.s;
      this.fileName = result.f;
    }
  }

}