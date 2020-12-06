import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageStatusPage } from './page-status.page';

describe('PageStatusPage', () => {
  let component: PageStatusPage;
  let fixture: ComponentFixture<PageStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
