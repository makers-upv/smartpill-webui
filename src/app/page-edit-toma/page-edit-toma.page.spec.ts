import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageEditTomaPage } from './page-edit-toma.page';

describe('PageEditTomaPage', () => {
  let component: PageEditTomaPage;
  let fixture: ComponentFixture<PageEditTomaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEditTomaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageEditTomaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
