import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';
import { IUserList } from 'src/app/models/IUserList';
import { SelectionModel } from '@angular/cdk/collections';
import { UserFilter } from 'src/app/models/UserFilter';
import { ToastrService } from 'ngx-toastr';
import { DateTime } from 'luxon';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  animations: [
    trigger("detailExpand", [
      state(
        "collapsed",
        style({ height: "0px", minHeight: "0", display: "none" })
      ),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ]
})
export class UsersListComponent implements OnInit {
  columns = [
    "Select",
    "Avatar",
    "FullName",
    "Gender",
    "Orders",
    "Points",
    "Reviews",
    "SignUpWith",
    "Status",
    "Registration_Date",
    "Controls",
    "Expand"
  ];
  
  dataSource: MatTableDataSource<IUserList>;
  expandedElement: IUserList | null;
  selection = new SelectionModel<IUserList>(true, []);
  nbTotal: number;
  queryObj: UserFilter;

  _dateTime = DateTime; // luxion instance
  
  constructor(private userService: UserService, private toaster: ToastrService) {
      this.queryObj = new UserFilter();
    }
    
  ngOnInit() {
      this.populateUsers();
  }

  public get availablePages(): number {
    const nb = Math.ceil(this.nbTotal / this.queryObj.PageSize) || 1;
    return nb;
  }

  public get activePage(): number {
    return this.queryObj.CurrentPage + 1;
  }
    
  selectUsersType(usersType) {
    if (this.queryObj.UserRole !== usersType) {
      this.queryObj.UserRole = usersType;
      this.populateUsers();
    }
  }

  private populateUsers() {
    this.userService.GetUsersList(this.queryObj).subscribe((res: any) => {
      this.nbTotal = res.Count; // display the total of products somewhere
      this.dataSource = new MatTableDataSource<IUserList>(res.Items);
      
      this.selection.clear();
    });
  }

  isAllSelected() {
    const nbSelected = this.selection.selected.length;
    const nbRows = this.dataSource.data.length;
    return nbSelected === nbRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  trackById(index, product) {
    return product ? product.Id : undefined;
  }

  orderBy(value) {
    if (this.queryObj.OrderBy === value)
      this.queryObj.IsSortAscending = !this.queryObj.IsSortAscending;
    else {
      this.queryObj.IsSortAscending = true;
      this.queryObj.OrderBy = value;
    }
    
    this.populateUsers();
  }

  itemsToShowChanged() {
    this.queryObj.CurrentPage = 0; // Might Changed later
    this.populateUsers();
  }

  paggingInputChanged(page) {
    if (page > 0) {
      this.queryObj.CurrentPage = page - 1;
    } else {
      this.queryObj.CurrentPage = 0; 
    }

    this.populateUsers();
  }

  goToPage(page) {
    this.queryObj.CurrentPage = page;
    this.populateUsers();
  }

  nextPage() {
    if ((this.queryObj.CurrentPage + 1) < this.availablePages) {
    this.queryObj.CurrentPage++;
    this.populateUsers();
    }
  }

  prevPage() {
    if (this.queryObj.CurrentPage > 0) {
      this.queryObj.CurrentPage--;
      this.populateUsers();
    }
  }

  startChat(id: string) {

  }

  blockUser(id: string){

  }
}
