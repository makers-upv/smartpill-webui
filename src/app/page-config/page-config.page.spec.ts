import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageConfigPage } from './page-config.page';

describe('PageConfigPage', () => {
  let component: PageConfigPage;
  let fixture: ComponentFixture<PageConfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageConfigPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
