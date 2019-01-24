/**
 * The CostItem model.
 *
 * @author Sergi Philipsen.
 */

export class CostItemModel {
  itemType: string;

  constructor(itemType: string = '') {
    this.itemType = itemType;
  }
}
