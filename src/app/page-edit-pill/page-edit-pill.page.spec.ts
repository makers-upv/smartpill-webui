import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageEditPillPage } from './page-edit-pill.page';

describe('PageEditPillPage', () => {
  let component: PageEditPillPage;
  let fixture: ComponentFixture<PageEditPillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEditPillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageEditPillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
