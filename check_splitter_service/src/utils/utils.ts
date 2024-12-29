export class Utils {
  static getFieldsToUpdate(updateDto: any): any {
    const fieldsToUpdate = Object.keys(updateDto).reduce((acc, key) => {
      if (updateDto[key] !== undefined && updateDto[key] !== null) {
        acc[key] = updateDto[key];
      }
      return acc;
    }, {});

    return fieldsToUpdate;
  }
}
