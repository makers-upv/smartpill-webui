import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageLogPage } from './page-log.page';

describe('PageLogPage', () => {
  let component: PageLogPage;
  let fixture: ComponentFixture<PageLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
