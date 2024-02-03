import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import angular material modules
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

// import the issue service
import { IssueService } from '../../services/issue.service';

// import the issue type
import { Issue } from '../../types/issue.interface';

@Component({
   selector: 'app-issue-list',
   templateUrl: './issue-list.component.html',
   styleUrl: './issue-list.component.scss',
   standalone: true,
   imports: [MatTableModule],
})
export class IssueListComponent {
   // set the data source
   dataSource = new MatTableDataSource<Issue>();

   columnsToDisplay = ['title', 'category', 'status'];

   constructor(private issueService: IssueService, private router: Router) {}

   // gets all issues from issue service
   getIssues(): void {
      this.issueService.getIssues().subscribe((issues) => {
         this.dataSource.data = issues;
      });
   }

   // delete issue
   onDeleteIssue(id: string) {
      this.issueService.deleteIssue(id).subscribe(() => {
         // navigates user back to the issue page
         this.router.navigateByUrl('/issues');
      });
   }
}
