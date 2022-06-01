import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { DetailsPostPage } from './details-post.page'

describe('DetailsPostPage', () => {
  let component: DetailsPostPage
  let fixture: ComponentFixture<DetailsPostPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPostPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents()

    fixture = TestBed.createComponent(DetailsPostPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
