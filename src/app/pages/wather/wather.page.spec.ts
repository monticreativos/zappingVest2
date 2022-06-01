import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { WatherPage } from './wather.page'

describe('InfoPage', () => {
  let component: WatherPage
  let fixture: ComponentFixture<WatherPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WatherPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents()

    fixture = TestBed.createComponent(WatherPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
