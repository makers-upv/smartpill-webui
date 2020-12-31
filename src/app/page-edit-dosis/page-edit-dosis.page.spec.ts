import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageEditDosisPage } from './page-edit-dosis.page';

describe('PageEditDosisPage', () => {
  let component: PageEditDosisPage;
  let fixture: ComponentFixture<PageEditDosisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEditDosisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageEditDosisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
