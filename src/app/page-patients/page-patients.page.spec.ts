import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagePatientsPage } from './page-patients.page';

describe('PagePatientsPage', () => {
  let component: PagePatientsPage;
  let fixture: ComponentFixture<PagePatientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePatientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagePatientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
