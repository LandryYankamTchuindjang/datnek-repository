import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, PostComponent, RouterModule],
  selector: 'datnek-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'datnek-angular';
}

// @NgModule({
//   declarations: [AppComponent, HeaderComponent, PostComponent],
//   imports: [RouterModule, CommonModule],
//   exports: [RouterModule],
// })
// export class AppModule {}
