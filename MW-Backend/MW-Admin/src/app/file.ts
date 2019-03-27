// export class ProductListComponent implements OnInit {
//   constructor(private aps: AdminProductService) { }

//   columns: string[] = ['Select', 'Id', 'Image', 'Name', 'Price', 'Color', 'Quantity', 'OnSale', 'Source', 'Date_Created', 'Controls', 'Expand'];
//   products$;
//   dataSource: Observable<any[]>;
//   selection = new SelectionModel<AdminProduct>(true, []);

//   ngOnInit() {
//     this.aps.GetProductsList().subscribe((data: AdminProduct[]) => {
//       this.products$ = new BehaviorSubject(data);
//       this.dataSource = this.products$.pipe(map(v => Object.values(v)));
//     });
//   }

//   isAllSelected() {
//     const numSelected = this.selection.selected.length;
//     const numRows = 10; //

//     return numSelected === numRows;
//   }

//   masterToggle() {
//     this.isAllSelected() ?
//       this.selection.clear() :
//       this.products$.forEach(row => this.selection.select(row));
//   }
// }