from functions_resources import chat, speak, summarize, getGender, getAnswer, diaryToDB, getAudio
import speech_recognition as sr

gender = getGender()

# 일기 유도
system_instruction = f"지금은 저녁이다. {gender}는 매일 일기를 쓴다. {gender}의 7살 손주가 {gender}에게 지금 당장 일기를 쓰라고 하고 싶은데, 뭐라고 해야 할 지 1줄 이내로 알려줘라."
res = getAnswer(system_instruction)
print(res)
speak(res)


# 일기 작성
diary = getAudio()

# 일기 내용 기반 대화
res = chat(diary)
print(res)
speak(res)

while True:
    ans = getAudio()
    if ans == "End of Conversation" :
        break

    print(ans)
    res = chat(ans)
    print(res)
    speak(res)

# diary summarization
summarizedDiary = summarize(diary)

print(f"diary: {diary}")
print()
print(f"summarize: {summarizedDiary}")
print()

# 일기를 DB에 저장
diaryToDB(diary, summarizedDiary)
